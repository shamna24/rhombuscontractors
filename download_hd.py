import urllib.request
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

hd_photos = {
    # Hero: Iconic structural steel framework under construction with blue sky
    'hero_hd.jpg': [
        'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1600&q=90',
        'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1600&q=90'
    ],
    # 01 Construction Material Supply: Stacked steel hollow pipes/tubes
    'service_1_hd.jpg': [
        'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=90',
        'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=90'
    ],
    # 02 Fabrication & Installation of Metal Work: Industrial welder with bright sparks
    'service_2_hd.jpg': [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=90',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=90'
    ],
    # 03 Powder Coating: Powder coated blue architectural profiles
    'service_3_hd.jpg': [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=90'
    ],
    # 04 Sub Contracting in Construction: High-rise commercial construction framework
    'service_4_hd.jpg': [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=90'
    ],
    # 05 Architectural Design & 3D Visualisation: 3D architectural building render & blueprint design
    'service_5_hd.jpg': [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=90',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=90'
    ],
    # 06 Joinery and Interior Fitout: Precision commercial architectural joinery & timber interior fitout
    'service_6_hd.jpg': [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=90',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=90'
    ],
    # 07 Access and Temporary Works: Construction scaffolding & structural access support
    'service_7_hd.jpg': [
        'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=90',
        'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1000&q=90'
    ],
    # About Section: Upward perspective of structural steel framework
    'about_hd.jpg': [
        'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=90'
    ]
}

for name, urls in hd_photos.items():
    dest = os.path.join('public', 'images', name)
    downloaded = False
    for url in urls:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=12) as resp, open(dest, 'wb') as f:
                f.write(resp.read())
            print(f'Successfully downloaded {name} ({os.path.getsize(dest)} bytes)')
            downloaded = True
            break
        except Exception as e:
            print(f'Failed {url}: {e}')
    if not downloaded:
        print(f'CRITICAL: Failed to download any source for {name}')
