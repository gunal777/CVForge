# CVForger Builder (React)

A simple CV / Resume Builder built using **React**.  
Users can enter their personal details, education, and experience, preview the resume live, and export it using the browser’s print / save-as-PDF feature.

---

## ✨ Features

- 🧑 General Information section (Name, Email, Phone)
- 🎓 Education section (multiple entries supported)
- 💼 Experience section (multiple entries supported)
- 👀 Live resume preview
- 🖨️ Print / Save resume as PDF
- 🎨 Clean UI with form panels and a resume preview
- 📄 Print-only styling (only the resume is printed)

---

## Project Structure

```
src/
├── components/
│   ├── EducationDetails.jsx
│   ├── ExperienceDetails.jsx
│   ├── GeneralDetail.jsx
│   └── Previews.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/cv-builder.git
cd cv-builder
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the app in your browser at:

```
http://localhost:5173
```

---

## Export as PDF

The resume can be exported using the browser’s built-in print feature.

1. Click the **Export / Print** button
2. Choose **Save as PDF**
3. Select layout options (A4 recommended)
4. Save

You can also apply print-specific CSS using `@media print` to format only the resume preview.

---

## Technologies Used

- React
- JavaScript (ES6+)
- CSS
- Vite

---

## Notes

- State is managed in the parent component and passed down as props
- Education and Experience forms use local state with a **Save** button
- Preview layout is isolated from form styling

---

## License

This project is open source and free to use for learning and personal projects.
