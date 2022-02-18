
# Opgave fra Pentia.

## Hvordan i tester det selv.

Tænker godt i ved hvordan man tester det, men hvis i er i twivl er der en lille guide nede for.

```bash

git clone https://github.com/taxidriver2192/pentia-v2.git

cd pentia-v2

npm i

npm run dev

```

## Problemer.
### Overflow
Havde nogle problemer med at få stylet `overflow` i den farve der var i designet.
Fandt dette https://caniuse.com/?search=scrollbar-color, men dette var ikke supportet og derfor droppede jeg det.

### fullpage scroll
Hvis det havde været et større projekt havde det været fedt at lave fullpage scroll. Fandt nemlig dette https://alvarotrigo.com/fullPage/.
men desværre skulle jeg bare lavet for mange ting om før dette ville virke.

### SVG
Havde også nogle problemer med at style SVG billeder i next.js, så havde at vælge mellem `<Images>` eller `<image>` tag, ville grene gå med next Image pga speed. dette gjorde bare at jeg ikke kunne style dem? Der er sikket et simpelt fix til dette, men valgte bare at lave dem om til png billeder i steden for.

### Startede for stort ud
Første gang jeg prøve at lave projektet ville jeg gerne lære tailwindui, lad os bare sige det gjorde mig kun langsomt og det er længe side jeg har været så forvirret over at lave css, som jeg var da jeg prøvet med tailwind...

## Samlet tid.

Har brugt for lang tid på responsive design, men nu spiller det til gengæld. Har ikke testet i andre browser eller enheder, har bare lavet det i firefox...

* Destop = 2.5t
* Responsive = 2TT
* Lidt leg = 1T

### Færdig desig.

Her kan i se et billede af det færdig design.


<img alt="expo sdk" src="https://github.com/taxidriver2192/pentia-v2/blob/main/images/Pentia-design.jpg">
