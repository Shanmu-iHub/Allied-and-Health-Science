import os
import glob
import re

html_files = glob.glob('**/*.html', recursive=True)

seo_head_tags = """    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0HSZX6FPL1"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-0HSZX6FPL1'); </script>
    
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P64QRC6T');</script>
    <!-- End Google Tag Manager -->

    <!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];
    t=b.createElement(e);t.async=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}
    (window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '153788363108861');
    fbq('track', 'PageView');
    </script>
    <noscript>
    <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=153788363108861&ev=PageView&noscript=1"/>
    </noscript>
    <!-- End Meta Pixel Code -->

    <meta name="keywords" content="allied health sciences college in coimbatore, best allied health sciences college, allied health science courses after 12th, bsc cardiac technology, bsc radiology course, physician assistant course, operation theatre technology course, optometry course in coimbatore, respiratory therapy course, dialysis technology course, cardiac technology colleges in tamil nadu, radiography colleges in coimbatore, allied health science admission 2026, paramedical colleges in coimbatore, medical courses after 12th biology, best paramedical college in tamil nadu, allied health sciences colleges near me, bsc operation theatre and anaesthesia technology, cardio pulmonary perfusion technology, healthcare courses in coimbatore, top allied health science colleges in tamil nadu, allied health science degree courses, medical imaging technology course, SNS College of Allied Health Science, snscahs, allied health sciences placement, allied health science colleges with hostel, paramedical courses admission, allied health science internship, allied health science careers">
    <link rel="canonical" href="https://snscahs.org/">
"""

seo_body_tags = """    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P64QRC6T"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
"""

count = 0
for filepath in html_files:
    if 'bitrix.html' in filepath or 'brochure-viewer' in filepath or 'index.html' in filepath:
        continue # skip index.html since we did it manually

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if 'GTM-P64QRC6T' in content:
        continue # Already added
        
    new_content = content
    # Replace <head> with <head> + tags
    new_content = re.sub(
        r'<head>',
        r'<head>\n' + seo_head_tags,
        new_content,
        count=1
    )
    
    # Replace <body class="..."> with <body class="..."> + tags
    new_content = re.sub(
        r'(<body[^>]*>)',
        r'\1\n' + seo_body_tags,
        new_content,
        count=1
    )
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        
print(f"Updated {count} files with SEO tags.")
