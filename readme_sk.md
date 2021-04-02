# SpeechMeter

Dôležitým parametrom pri konfigurácii každého nového stroja pre použitie s čítačom obrazovky je rýchlosť reči daného programu.
Na jeho konfiguráciu slúžia posuvníky v nastaveniach čítačov, tie sú však všetko len nie reprezentatívne, a už vôbec nie jednotné. Z toho dôvodu je celkom problematické ich správne nastaviť, aby nedošlo k poklesu produktivity, no ani konfortu používateľa.

SpeechMeter je jednoduchá webová aplikácia, ktorá má za cieľ tento problém vyriešiť. Na základe stopovacieho mechanizmu umožňuje používateľovi zmerať rýchlosť reči akéhokoľvek čítača obrazovky v jednotkách WPM (počet slov, ktoré program priemerne vysloví za minútu).

## Použitie

1. Naklonujte repozitár, či už cez webové rozhranie, alebo príkazom:\
```git clone https://github.com/RastislavKish/SpeechMeter```\
Otvorte súbor speechmeter.html v ľubovoľnom webovom prehliadači.
2. Zadajte text, ktorý bude použitý ako základ pre meranie. Môžete tiež nechať vložiť preddefinovaný text pomocou tlačítka Insert predefined text, táto možnosť je výhodná najmä vtedy, ak pracujete aj s mobilnými zariadeniami.
3. Nájdite tlačítko Start a stlačte medzerník. Čítač obrazovky by mal začať čítať zadaný text. Neprerušujte ho a počkajte, kým skončí. Hneď ako sa tak stane, stlačte znovu medzerník.
4. Pod formulárom sa zobrazia namerané hodnoty. Current speech rate je rýchlosť reči z práve vykonaného merania. Average speech rate je priemerná rýchlosť reči zo všetkých meraní, ktoré ste vykonali od poslednej zmeny textu v políčku.

## Tipy a triky

* Nameraná rýchlosť reči nie je univerzálna, a do určitej miery závisí na texte, na ktorom bola odmeraná. Je preto vhodné pri porovnávaní viacerých hlasov vychádzať z rovnakého textu, čo by malo lepšie odrážať ich relatívne rýchlosti.
* Zo štatistického hľadiska platí, že čím dlhší uniformný vstupný text, tým presnejšie sú výsledky merania pre daný text. Vhodná dĺžka závisí od jeho jazykového štýlu a nemožno ju univerzálne určiť. Môžete ale postupným pridávaním slov sledovať zmenu nameranej rýchlosti. Ak sa táto bude blížiť nule, znamená to, že je text uniformný čo do použitých jazykových prostriedkov, a tak by tieto nemali výsledky príliš ovplyvniť.
* Preddefinovaný text v skutočnosti nie je preddefinovaný, nakoľko nemožno univerzálne zvoliť ukážku vhodnú pre všetky jazyky. Môžete si ho však veľmi ľahko nastaviť. Stačí otvoriť súbor js/main.js v ľubovoľnom textovom editore a na riadku:\
```predefinedText="";```\
Vpísať želaný text medzi úvodzovky.
* SpeechMeter má pod vstupným formulárom počítadlo slov (údaj word count). Je plne dynamické a ukazuje počet slov v poli s textom, ktorý môžete použiť na kontrolu jeho dĺžky.

