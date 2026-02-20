# Sistema Ganadero Web - Guia de Deploy

## Archivos del proyecto
```
ganadero_web/
    app.py              ← servidor Flask
    requirements.txt    ← dependencias
    Procfile            ← instruccion para Railway
    railway.toml        ← configuracion Railway
    templates/
        index.html      ← interfaz web
```

---

## PASO 1 - Probar en tu PC primero

Abri una terminal en la carpeta ganadero_web/ y ejecuta:

```bash
pip install flask flask-sqlalchemy openpyxl reportlab Pillow gunicorn
python app.py
```

Luego abri el navegador en: http://localhost:5000
Deberias ver el sistema funcionando.

---

## PASO 2 - Subir a GitHub

1. Crea una cuenta en https://github.com si no tenes
2. Crea un repositorio nuevo (boton verde "New")
   - Nombre: sistema-ganadero
   - Privado o publico (lo que prefieras)
   - NO marcar "Add README"

3. Abri terminal en la carpeta ganadero_web/ y ejecuta:

```bash
git init
git add .
git commit -m "Sistema Ganadero Web"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sistema-ganadero.git
git push -u origin main
```

(Reemplaza TU_USUARIO con tu usuario de GitHub)

---

## PASO 3 - Subir a Railway (GRATIS)

1. Ir a https://railway.app
2. Clic en "Login" → "Login with GitHub"
3. Clic en "New Project"
4. Elegir "Deploy from GitHub repo"
5. Seleccionar "sistema-ganadero"
6. Railway detecta automaticamente que es Python y lo configura
7. Esperar 2-3 minutos mientras construye

Al terminar te da una URL como:
   https://sistema-ganadero-production.up.railway.app

Esa URL funciona en cualquier celular, PC o tablet.

---

## PASO 4 - Agregar base de datos persistente (importante)

Por defecto Railway usa SQLite local (se borra al reiniciar).
Para datos permanentes:

1. En tu proyecto Railway, clic en "+ New"
2. Seleccionar "Database" → "PostgreSQL"
3. Railway crea la base de datos y agrega automaticamente
   la variable DATABASE_URL al proyecto
4. El codigo ya esta preparado para usarla automaticamente

---

## Acceder desde el celular

1. Abri Chrome o Safari en el celular
2. Escribi la URL de Railway
3. Para agregar al inicio del celular como app:
   - Chrome Android: menu (3 puntos) → "Agregar a pantalla de inicio"
   - Safari iPhone: compartir → "Agregar a inicio"

Aparece como una app mas en el celular.

---

## Actualizar el sistema

Cuando hagas cambios en el codigo:

```bash
git add .
git commit -m "descripcion del cambio"
git push
```

Railway detecta el push y actualiza automaticamente en 2 minutos.

---

## Resumen de costos

| Servicio  | Plan     | Costo    |
|-----------|----------|----------|
| Railway   | Hobby    | GRATIS   |
| GitHub    | Free     | GRATIS   |
| Dominio   | Opcional | ~$10/año |

El plan gratuito de Railway da $5 de credito por mes,
suficiente para una app pequena con uso normal.

---
Sistema Ganadero Profesional - Version Web
