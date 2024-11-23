# השתמש בתמונה רשמית של Node.js
FROM node:18-alpine

# הגדרת תיקיית העבודה
WORKDIR /usr/src/app

# העתקת קובץ package.json והתקנת התלויות
COPY package*.json ./
RUN npm install

# העתקת שאר קבצי הפרויקט
COPY . .

# פתיחת פורט 3000
EXPOSE 3000

# הרצת השרת
CMD ["node", "server.js"]

