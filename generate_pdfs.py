import os
from weasyprint import HTML, CSS
from weasyprint.text.fonts import FontConfiguration

# Konfiguration für Schriftarten
font_config = FontConfiguration()

# Verzeichnisse
html_dir = '/home/ubuntu/plg_website_v2/pdfs'
output_dir = '/home/ubuntu/plg_website_v2/pdfs'

# Liste der HTML-Dateien, die in PDFs umgewandelt werden sollen
html_files = [
    'leitfaden_plg.html',
    'beobachtungsbogen.html',
    'reflexionsbogen.html',
    'checkliste.html'
]

# Zusätzliches CSS für bessere PDF-Darstellung
additional_css = CSS(string='''
    @page {
        size: A4;
        margin: 2cm;
    }
    
    @font-face {
        font-family: 'Open Sans';
        src: url('/usr/share/fonts/truetype/open-sans/OpenSans-Regular.ttf');
    }
    
    @font-face {
        font-family: 'Montserrat';
        src: url('/usr/share/fonts/truetype/montserrat/Montserrat-Regular.ttf');
    }
    
    body {
        font-family: 'Open Sans', sans-serif;
    }
    
    h1, h2, h3, h4 {
        font-family: 'Montserrat', sans-serif;
    }
''', font_config=font_config)

# Umwandlung der HTML-Dateien in PDFs
for html_file in html_files:
    html_path = os.path.join(html_dir, html_file)
    pdf_file = os.path.splitext(html_file)[0] + '.pdf'
    pdf_path = os.path.join(output_dir, pdf_file)
    
    print(f"Konvertiere {html_file} zu {pdf_file}...")
    
    # HTML in PDF umwandeln
    HTML(html_path).write_pdf(pdf_path, font_config=font_config, stylesheets=[additional_css])
    
    print(f"PDF erfolgreich erstellt: {pdf_path}")

print("Alle PDFs wurden erfolgreich erstellt!")
