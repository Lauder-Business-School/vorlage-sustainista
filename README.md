# Prototyp für die Lehrveranstaltung

Diese Vorlage dient ausschließlich zum Experimentieren. Sie ist keine offizielle Website.
Einige ursprüngliche Kontakt-, Video-, Termin- und Produktfunktionen sind nicht eingerichtet;
ersetze sie durch eigene Dienste. Prüfe vor einer Veröffentlichung alle verbleibenden
Links, Inhalte und Einbindungen.
Behandle Inhalte, Logos, Fotos und Texte als Unterrichtsmaterial und beachte die Rechte Dritter.

## Dein eigenes Repository

1. Öffne auf GitHub **Use this template → Create a new repository**.
2. Wähle dein eigenes Konto als Owner und erstelle zunächst ein **privates** Repository.
3. Lade `stefangeorgbauer84` unter **Settings → Collaborators** ein. Erst nach Annahme
   hat die Lehrperson Zugriff auf deine Änderungen.
4. Klone dein eigenes Repository, nicht das ursprüngliche Projekt.

## Lokal starten

Für Projekte mit `package.json`:

```bash
npm ci
npm run dev
```

Öffne die vom Terminal ausgegebene lokale Adresse. Beim statischen Projekt ohne
`package.json` starte stattdessen `python3 -m http.server 8000` und öffne
`http://localhost:8000`.

## Eigene Dienste und Verbindung testen

1. Erstelle ein **eigenes** Vercel-Projekt in deinem Konto und importiere dein eigenes
   GitHub-Repository. Prüfe beim Import ausdrücklich den gewählten Account bzw. das Team.
   Änderungen, die du zu GitHub pushst, sollen ein neues Deployment auslösen.
2. Erstelle ein **eigenes, neues** Supabase-Projekt. Führe dort im SQL-Editor die Datei
   `kurs-setup.sql` aus. Die Testtabelle enthält ausschließlich eine öffentliche
   Beispielnachricht und ist für anonyme Lesezugriffe freigegeben.
3. Öffne `/verbindungstest.html` auf deiner bereitgestellten Vercel-Website. Trage die
   Project URL und den **Publishable Key** deines eigenen Supabase-Projekts ein und teste
   den lesenden Zugriff. Verwende niemals einen Secret- oder Service-Role-Key im Browser.
4. Ändere einen sichtbaren Text in deinem Repository, pushe ihn und kontrolliere das neue
   Vercel-Deployment sowie den Verbindungstest erneut.

Verwende keine echten Personen-, Kunden- oder Geschäftsdaten. `.env`-Dateien gehören
nicht ins Repository; geheime Schlüssel bleiben ausschließlich auf dem Server bzw. in
den Einstellungen deines eigenen Dienstes. Ein privates Repository macht eine bereitgestellte
Vercel-Website nicht automatisch privat. Teste Kosten, Limits, Zugriffe und Datenschutz,
bevor du weitere Dienste aktivierst.
