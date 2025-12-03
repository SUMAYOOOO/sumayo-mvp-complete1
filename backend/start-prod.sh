#!/bin/bash
echo "Iniciando backend..."
npx prisma generate
npx prisma migrate deploy
exec node dist/main.js
