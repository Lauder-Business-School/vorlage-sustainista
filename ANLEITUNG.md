# Dein eigener Website-Prototyp

**Wichtig:** Diese Anleitung setzt voraus, dass die Lehrperson dir einen Link zu einer
freigegebenen Vorlage geschickt und dir Zugriff darauf gegeben hat. Erstelle dein Projekt
in deinen eigenen Konten; verwende keine Zugangsdaten oder Projekte der Lehrperson.

## 1. Vor dem Unterricht

- Erstelle eigene Konten bei GitHub, Vercel und Supabase und bestätige deine E-Mail-Adressen.
- Schicke der Lehrperson deinen **GitHub-Benutzernamen** und teile ihr mit, welche Vorlage
  du verwenden möchtest. Gib niemals Passwörter oder API-Schlüssel weiter.
- Für lokales Arbeiten brauchst du Git und Node.js 22 mit npm. Für die statische Vorlage
  genügt alternativ Python 3. Es fallen je nach Tarif und Nutzung möglicherweise Kosten an;
  beachte die aktuellen Limits und Bedingungen deiner Konten.

## 2. Deine eigene Kopie erstellen

1. Öffne den Vorlagenlink der Lehrperson und nimm gegebenenfalls die GitHub-Einladung an.
2. Klicke **Use this template → Create a new repository**.
3. Wähle **dein persönliches GitHub-Konto** als Owner, gib dem Projekt einen Namen
   und wähle zunächst **Private**. Erstelle das Repository.
4. Öffne in deinem neuen Repository **Settings → Collaborators → Add people** und lade
   `stefangeorgbauer84` ein. Die Lehrperson erhält erst Zugriff, wenn sie die Einladung
   annimmt. Sie ist nicht automatisch in deinem Repository.

## 3. Lokal starten

Klone **dein neues Repository** über den von GitHub angezeigten HTTPS- oder SSH-Link.
Wechsle im Terminal in den heruntergeladenen Ordner.

Bei einer Vorlage mit `package.json`:

```bash
npm ci
npm run dev
```

Öffne die Adresse, die das Terminal ausgibt, normalerweise `http://localhost:3000`.
Bei der statischen Vorlage ohne `package.json`:

```bash
python3 -m http.server 8000
```

Öffne `http://localhost:8000`. Beende den lokalen Server im Terminal mit `Ctrl+C`.

## 4. Auf deinem eigenen Vercel bereitstellen

1. Melde dich bei Vercel mit deinem eigenen Konto an.
2. Wähle **Add New → Project**, verbinde dein GitHub-Konto und importiere **dein eigenes**
   Repository. Kontrolliere, dass du nicht im Team oder Projekt der Lehrperson bist.
3. Übernimm die erkannten Build-Einstellungen und starte das Deployment. Öffne danach
   die von Vercel angezeigte Website-Adresse.
4. Ändere einen sichtbaren Text, committe und pushe die Änderung in dein Repository.
   Kontrolliere in Vercel, dass ein neues Deployment läuft und deine Änderung sichtbar ist.

Ein privates GitHub-Repository schützt die Website nicht automatisch vor Zugriff. Prüfe
Vercels Deployment Protection und entscheide bewusst, ob andere die Website sehen dürfen.

## 5. Eigenes Supabase-Projekt testen

Dieser Test prüft eine kleine unabhängige Verbindung. Er richtet **nicht automatisch**
eine Datenbankfunktion in deiner Website ein.

1. Erstelle in deinem eigenen Supabase-Konto ein **neues** Projekt und warte, bis es bereit ist.
2. Öffne dessen **SQL Editor**, kopiere den Inhalt der Datei `kurs-setup.sql` aus deinem
   Repository hinein und führe ihn einmal aus. Das Skript erstellt eine öffentliche,
   lesbare Testtabelle mit einer fiktiven Nachricht. Verwende es nicht in einem bestehenden
   Projekt mit wichtigen Daten.
3. Öffne auf deiner Vercel-Adresse `/verbindungstest.html`. Gib dort die Project URL und
   den **Publishable Key** deines eigenen Supabase-Projekts ein und klicke auf
   **Verbindung testen**. Der Key beginnt mit `sb_publishable_`; Project URL und Key
   findest du im Supabase-Projekt unter **Connect** bzw. **API Keys**.
4. Bei Erfolg erscheint die Testnachricht. Bei einem Fehler prüfe URL, Key, Projektstatus
   und ob das SQL-Skript im richtigen Projekt erfolgreich ausgeführt wurde.

Die Testtabelle ist öffentlich lesbar: **Trage dort keine persönlichen oder vertraulichen
Daten ein.** Verwende niemals `sb_secret_`- oder `service_role`-Schlüssel im Browser,
in einem GitHub-Repository oder in einer Nachricht. Dateien wie `.env.local` bleiben lokal
und werden nicht eingecheckt. Echte geheime Schlüssel gehören nur in serverseitige
Umgebungsvariablen deines eigenen Projekts.

## 6. Deinen Prototyp entwickeln

Ersetze Texte und Inhalte durch deine eigene Idee. Baue Funktionen schrittweise und nutze
nur eigene Dienste und freigegebene Medien. Kontakt-, Video- und Produktfunktionen der
Vorlage können deaktiviert sein und müssen bei Bedarf selbst neu umgesetzt werden.
Verwende keine echten Kunden- oder Personendaten. Prüfe Nutzungsrechte, Datenschutz und
Sicherheit, bevor du den Prototyp mit anderen teilst.

**Abgabe:** Schicke der Lehrperson den Link zu deinem GitHub-Repository und – falls
freigegeben – zu deinem Vercel-Deployment. Bestätige, dass die GitHub-Einladung
angenommen wurde und der Verbindungstest die fiktive Nachricht zeigt.
