#!/bin/bash
set -ex  # Exit on error, show commands

echo "=== 🚀 SUMAYÕ BACKEND DEBUG START ==="
date
echo "======================================"

# 1. Mostrar variables críticas (ocultando valores completos por seguridad)
echo "🔍 Variables de entorno:"
echo "   NODE_ENV=$NODE_ENV"
echo "   PORT=$PORT"
echo "   DATABASE_URL existe: ${DATABASE_URL:+✅}"
echo "   JWT_SECRET existe: ${JWT_SECRET:+✅}"

# 2. Verificar estructura del proyecto
echo "📁 Estructura del proyecto:"
ls -la
echo "---"
ls -la dist/ 2>/dev/null || echo "dist/ no existe"

# 3. Generar Prisma Client
echo "⚙️  Generando Prisma Client..."
npx prisma generate

# 4. Ejecutar migraciones
echo "🗃️  Ejecutando migraciones de base de datos..."
if npx prisma migrate deploy; then
    echo "✅ Migraciones exitosas"
else
    echo "⚠️  Migraciones fallaron, continuando..."
fi

# 5. Verificar que main.js existe y es ejecutable
echo "🔧 Verificando archivo principal..."
if [ -f "dist/main.js" ]; then
    echo "✅ dist/main.js encontrado"
    echo "   Tamaño: $(wc -l < dist/main.js) líneas"
    echo "   Primera línea: $(head -1 dist/main.js)"
else
    echo "❌ ERROR: dist/main.js NO existe"
    echo "   Contenido de dist/:"
    ls -la dist/ 2>/dev/null || echo "dist/ vacío o no existe"
    exit 1
fi

# 6. Verificar dependencias
echo "📦 Verificando Node.js y dependencias..."
node --version
npm --version

# 7. INICIAR APLICACIÓN CON MANEJO DE ERRORES
echo "🚀 Iniciando aplicación NestJS..."
echo "   Puerto: $PORT"
echo "   Comando: node dist/main.js"

# Mantener el contenedor vivo incluso si falla, para ver errores
set +e
node dist/main.js
EXIT_CODE=$?

echo "======================================"
echo "⚠️  APLICACIÓN TERMINÓ CON CÓDIGO: $EXIT_CODE"
echo "=== 🐛 DEBUG INFO COMPLETA ==="

# 8. Información de diagnóstico
echo "📊 Diagnóstico adicional:"
ps aux
netstat -tuln 2>/dev/null || ss -tuln 2>/dev/null || echo "No se puede ver puertos"
echo "======================================"

# Mantener el contenedor vivo por 5 minutos para poder ver logs
echo "⏰ Manteniendo contenedor vivo por 300 segundos para diagnóstico..."
sleep 300
exit $EXIT_CODE
