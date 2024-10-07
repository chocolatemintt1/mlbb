const heroes = [
    { id: 1, name: "Tigreal", role: "Tank", damage: 4, durability: 9, cc: 8, image: "assets/tigreal.png" },
    { id: 2, name: "Akai", role: "Tank", damage: 5, durability: 8, cc: 7, image: "assets/akai.webp" },
    { id: 3, name: "Franco", role: "Tank", damage: 4, durability: 7, cc: 9, image: "assets/franco.webp" },
    { id: 4, name: "Minotaur", role: "Tank", damage: 5, durability: 9, cc: 8, image: "assets/minotaur.webp" },
    { id: 4, name: "Minotaur", role: "Support", damage: 5, durability: 9, cc: 8, image: "assets/minotaur.webp" },
    { id: 5, name: "Lolita", role: "Tank", damage: 4, durability: 8, cc: 7, image: "assets/lolita.webp" },
    { id: 5, name: "Lolita", role: "Support", damage: 4, durability: 8, cc: 7, image: "assets/lolita.webp" },
    { id: 6, name: "Johnson", role: "Tank", damage: 5, durability: 9, cc: 7, image: "assets/johnson.webp" },
    { id: 6, name: "Johnson", role: "Support", damage: 5, durability: 9, cc: 7, image: "assets/johnson.webp" },
    { id: 7, name: "Grock", role: "Tank", damage: 6, durability: 8, cc: 6, image: "assets/grock.webp" },
    { id: 7, name: "Grock", role: "Fighter", damage: 6, durability: 8, cc: 6, image: "assets/grock.webp" },
    { id: 8, name: "Hylos", role: "Tank", damage: 5, durability: 9, cc: 6, image: "assets/hylos.webp" },
    { id: 9, name: "Uranus", role: "Tank", damage: 4, durability: 9, cc: 4, image: "assets/uranus.webp" },
    { id: 10, name: "Belerick", role: "Tank", damage: 4, durability: 9, cc: 6, image: "assets/belerick.webp" },
    { id: 11, name: "Khufra", role: "Tank", damage: 5, durability: 8, cc: 9, image: "assets/khufra.webp" },
    { id: 12, name: "Baxia", role: "Tank", damage: 5, durability: 8, cc: 7, image: "assets/baxia.webp" },
    { id: 13, name: "Atlas", role: "Tank", damage: 4, durability: 8, cc: 9, image: "assets/atlas.webp" },
    { id: 14, name: "Barats", role: "Tank", damage: 6, durability: 8, cc: 7, image: "assets/barats.webp" },
    { id: 14, name: "Barats", role: "Fighter", damage: 6, durability: 8, cc: 7, image: "assets/barats.webp" },
    { id: 15, name: "Gloo", role: "Tank", damage: 5, durability: 9, cc: 7, image: "assets/gloo.webp" },
    { id: 16, name: "Edith", role: "Tank", damage: 6, durability: 8, cc: 7, image: "assets/edith.webp" },
    { id: 16, name: "Edith", role: "Marksman", damage: 6, durability: 8, cc: 7, image: "assets/edith.webp" },
    { id: 17, name: "Fredrinn", role: "Tank", damage: 6, durability: 8, cc: 6, image: "assets/fredrinn.webp" },
    { id: 17, name: "Fredrinn", role: "Fighter", damage: 6, durability: 8, cc: 6, image: "assets/fredrinn.webp" },



    { id: 18, name: "Alucard", role: "Fighter", damage: 8, durability: 5, cc: 3, image: "assets/alucard.webp" },
    { id: 18, name: "Alucard", role: "Assassin", damage: 8, durability: 5, cc: 3, image: "assets/alucard.webp" },
    { id: 19, name: "Bane", role: "Fighter", damage: 7, durability: 6, cc: 5, image: "assets/bane.webp" },
    { id: 19, name: "Bane", role: "Mage", damage: 7, durability: 6, cc: 5, image: "assets/bane.webp" },
    { id: 20, name: "Zilong", role: "Fighter", damage: 8, durability: 5, cc: 4, image: "assets/zilong.webp" },
    { id: 20, name: "Zilong", role: "Assassin", damage: 8, durability: 5, cc: 4, image: "assets/zilong.webp" },
    { id: 21, name: "Freya", role: "Fighter", damage: 7, durability: 6, cc: 5, image: "assets/freya.webp" },
    { id: 22, name: "Chou", role: "Fighter", damage: 7, durability: 6, cc: 7, image: "assets/chou.webp" },
    { id: 23, name: "Sun", role: "Fighter", damage: 7, durability: 6, cc: 4, image: "assets/sun.webp" },
    { id: 24, name: "Alpha", role: "Fighter", damage: 7, durability: 6, cc: 5, image: "assets/alpha.webp" },
    { id: 25, name: "Ruby", role: "Fighter", damage: 6, durability: 7, cc: 8, image: "assets/ruby.webp" },
    { id: 26, name: "Lapu-Lapu", role: "Fighter", damage: 8, durability: 6, cc: 6, image: "assets/lapu-lapu.webp" },
    { id: 27, name: "Gatot Kaca", role: "Fighter", damage: 5, durability: 8, cc: 8, image: "assets/gatotkaca.webp" },
    { id: 27, name: "Gatot Kaca", role: "Tank", damage: 5, durability: 8, cc: 8, image: "assets/gatotkaca.webp" },
    { id: 28, name: "Argus", role: "Fighter", damage: 8, durability: 5, cc: 4, image: "assets/argus.webp" },
    { id: 29, name: "Martis", role: "Fighter", damage: 7, durability: 6, cc: 6, image: "assets/martis.webp" },
    { id: 30, name: "Kaja", role: "Fighter", damage: 6, durability: 6, cc: 8, image: "assets/kaja.webp" },
    { id: 30, name: "Kaja", role: "Support", damage: 6, durability: 6, cc: 8, image: "assets/kaja.webp" },
    { id: 31, name: "Aldous", role: "Fighter", damage: 9, durability: 6, cc: 5, image: "assets/aldous.webp" },
    { id: 32, name: "Leomord", role: "Fighter", damage: 8, durability: 6, cc: 5, image: "assets/leomord.webp" },
    { id: 33, name: "Thamuz", role: "Fighter", damage: 7, durability: 7, cc: 5, image: "assets/thamuz.webp" },
    { id: 34, name: "Minsitthar", role: "Fighter", damage: 6, durability: 7, cc: 7, image: "assets/minsitthar.webp" },
    { id: 35, name: "Badang", role: "Fighter", damage: 7, durability: 6, cc: 7, image: "assets/badang.webp" },
    { id: 36, name: "Guinevere", role: "Fighter", damage: 8, durability: 5, cc: 7, image: "assets/guinevere.webp" },
    { id: 37, name: "Terizla", role: "Fighter", damage: 7, durability: 7, cc: 7, image: "assets/terizla.webp" },
    { id: 37, name: "Terizla", role: "Tank", damage: 7, durability: 7, cc: 7, image: "assets/terizla.webp" },
    { id: 38, name: "X.Borg", role: "Fighter", damage: 8, durability: 6, cc: 5, image: "assets/xborg.webp" },
    { id: 39, name: "Dyrroth", role: "Fighter", damage: 8, durability: 5, cc: 4, image: "assets/dyrroth.webp" },
    { id: 40, name: "Silvanna", role: "Fighter", damage: 7, durability: 6, cc: 7, image: "assets/silvanna.webp" },
    { id: 41, name: "Yu Zhong", role: "Fighter", damage: 7, durability: 7, cc: 6, image: "assets/yuzhong.webp" },
    { id: 42, name: "Khaleed", role: "Fighter", damage: 7, durability: 6, cc: 6, image: "assets/khaleed.webp" },
    { id: 43, name: "Paquito", role: "Fighter", damage: 8, durability: 6, cc: 6, image: "assets/paquito.webp" },
    { id: 43, name: "Paquito", role: "Assassin", damage: 8, durability: 6, cc: 6, image: "assets/paquito.webp" },
    { id: 44, name: "Yin", role: "Fighter", damage: 8, durability: 5, cc: 6, image: "assets/yin.webp" },
    { id: 44, name: "Yin", role: "Assassin", damage: 8, durability: 5, cc: 6, image: "assets/yin.webp" },
    { id: 45, name: "Julian", role: "Fighter", damage: 8, durability: 6, cc: 7, image: "assets/julian.webp" },
    { id: 45, name: "Julian", role: "Mage", damage: 8, durability: 6, cc: 7, image: "assets/julian.webp" },
    { id: 115, name: "Hilda", role: "Fighter", damage: 4, durability: 9, cc: 4, image: "assets/hilda.webp" },
    { id: 115, name: "Hilda", role: "Tank", damage: 4, durability: 9, cc: 4, image: "assets/hilda.webp" },
    { id: 116, name: "Masha", role: "Tank", damage: 7, durability: 5, cc: 3, image: "assets/masha.webp" },
    { id: 116, name: "Masha", role: "Fighter", damage: 7, durability: 5, cc: 3, image: "assets/masha.webp" },
    { id: 117, name: "Roger", role: "Fighter", damage: 4, durability: 6, cc: 1, image: "assets/roger.webp" },
    { id: 117, name: "Roger", role: "Marksman", damage: 4, durability: 6, cc: 1, image: "assets/roger.webp" },
    { id: 118, name: "Cici", role: "Fighter", damage: 6, durability: 5, cc: 2, image: "assets/cici.webp" },
    { id: 119, name: "Arlott", role: "Fighter", damage: 6, durability: 6, cc: 5, image: "assets/arlott.webp" },
    { id: 119, name: "Arlott", role: "Assassin", damage: 6, durability: 6, cc: 5, image: "assets/arlott.webp" },
    { id: 120, name: "Jawhead", role: "Fighter", damage: 3, durability: 6, cc: 6, image: "assets/jawhead.webp" },
    { id: 121, name: "Phoveus", role: "Fighter", damage: 7, durability: 8, cc: 3, image: "assets/phoveus.webp" },
    { id: 122, name: "Aulus", role: "Fighter", damage: 6, durability: 6, cc: 1, image: "assets/aulus.webp" },



    { id: 46, name: "Joy", role: "Assassin", damage: 7, durability: 6, cc: 5, image: "assets/joy.webp" },
    { id: 47, name: "Saber", role: "Assassin", damage: 8, durability: 3, cc: 4, image: "assets/saber.webp" },
    { id: 48, name: "Karina", role: "Assassin", damage: 9, durability: 3, cc: 3, image: "assets/karina.webp" },
    { id: 49, name: "Fanny", role: "Assassin", damage: 9, durability: 3, cc: 4, image: "assets/fanny.webp" },
    { id: 50, name: "Hayabusa", role: "Assassin", damage: 9, durability: 3, cc: 3, image: "assets/hayabusa.webp" },
    { id: 51, name: "Natalia", role: "Assassin", damage: 8, durability: 3, cc: 4, image: "assets/natalia.webp" },
    { id: 52, name: "Lancelot", role: "Assassin", damage: 9, durability: 3, cc: 3, image: "assets/lancelot.webp" },
    { id: 53, name: "Gusion", role: "Assassin", damage: 9, durability: 3, cc: 3, image: "assets/gusion.webp" },
    { id: 54, name: "Helcurt", role: "Assassin", damage: 8, durability: 3, cc: 5, image: "assets/helcurt.webp" },
    { id: 55, name: "Selena", role: "Assassin", damage: 8, durability: 3, cc: 7, image: "assets/selena.webp" },
    { id: 56, name: "Hanzo", role: "Assassin", damage: 8, durability: 3, cc: 4, image: "assets/hanzo.webp" },
    { id: 57, name: "Kadita", role: "Assassin", damage: 8, durability: 4, cc: 6, image: "assets/kadita.webp" },
    { id: 57, name: "Kadita", role: "Mage", damage: 8, durability: 4, cc: 6, image: "assets/kadita.webp" },
    { id: 58, name: "Ling", role: "Assassin", damage: 9, durability: 3, cc: 4, image: "assets/ling.webp" },
    { id: 59, name: "Benedetta", role: "Assassin", damage: 8, durability: 4, cc: 4, image: "assets/benedetta.webp" },
    { id: 59, name: "Benedetta", role: "Fighter", damage: 8, durability: 4, cc: 4, image: "assets/benedetta.webp" },
    { id: 60, name: "Mathilda", role: "Assassin", damage: 2, durability: 8, cc: 4, image: "assets/mathilda.webp" },
    { id: 61, name: "Aamon", role: "Assassin", damage: 9, durability: 3, cc: 3, image: "assets/aamon.webp" },
    { id: 123, name: "Suyou", role: "Assassin", damage: 6, durability: 6, cc: 5, image: "assets/suyou.webp" },
    { id: 123, name: "Suyou", role: "Fighter", damage: 6, durability: 6, cc: 5, image: "assets/suyou.webp" },
    { id: 124, name: "Nolan", role: "Assassin", damage: 6, durability: 3, cc: 2, image: "assets/nolan.webp" },


    { id: 62, name: "Floryn", role: "Support", damage: 5, durability: 4, cc: 6, image: "assets/floryn.webp" },
    { id: 106, name: "Angela", role: "Support", damage: 2, durability: 3, cc: 5, image: "assets/angela.webp" },
    { id: 107, name: "Diggie", role: "Support", damage: 4, durability: 4, cc: 2, image: "assets/diggie.webp" },
    { id: 108, name: "Estes", role: "Support", damage: 1, durability: 7, cc: 2, image: "assets/estes.webp" },
    { id: 109, name: "Rafaela", role: "Support", damage: 2, durability: 6, cc: 7, image: "assets/rafaela.webp" },
    { id: 60, name: "Mathilda", role: "Support", damage: 2, durability: 8, cc: 4, image: "assets/mathilda.webp" },
    { id: 110, name: "Faramis", role: "Support", damage: 6, durability: 4, cc: 1, image: "assets/faramis.webp" },
    { id: 110, name: "Faramis", role: "Mage", damage: 6, durability: 4, cc: 1, image: "assets/faramis.webp" },
    { id: 111, name: "Chip", role: "Support", damage: 2, durability: 8, cc: 6, image: "assets/chip.webp" },
    { id: 111, name: "Chip", role: "Tank", damage: 2, durability: 8, cc: 6, image: "assets/chip.webp" },
    { id: 112, name: "Carmilla", role: "Support", damage: 2, durability: 9, cc: 8, image: "assets/carmilla.webp" },
    { id: 112, name: "Carmilla", role: "Tank", damage: 2, durability: 9, cc: 8, image: "assets/carmilla.webp" },



    { id: 63, name: "Nana", role: "Mage", damage: 8, durability: 3, cc: 7, image: "assets/nana.webp" },
    { id: 64, name: "Eudora", role: "Mage", damage: 9, durability: 2, cc: 6, image: "assets/eudora.webp" },
    { id: 65, name: "Alice", role: "Tank", damage: 7, durability: 6, cc: 6, image: "assets/alice.webp" },
    { id: 65, name: "Alice", role: "Mage", damage: 7, durability: 6, cc: 6, image: "assets/alice.webp" },
    { id: 66, name: "Gord", role: "Mage", damage: 9, durability: 2, cc: 5, image: "assets/gord.webp" },
    { id: 67, name: "Kagura", role: "Mage", damage: 9, durability: 3, cc: 6, image: "assets/kagura.webp" },
    { id: 68, name: "Cyclops", role: "Mage", damage: 8, durability: 3, cc: 5, image: "assets/cyclops.webp" },
    { id: 69, name: "Aurora", role: "Mage", damage: 8, durability: 3, cc: 8, image: "assets/aurora.webp" },
    { id: 70, name: "Vexana", role: "Mage", damage: 8, durability: 3, cc: 6, image: "assets/vexana.webp" },
    { id: 71, name: "Harley", role: "Assassin", damage: 9, durability: 2, cc: 3, image: "assets/harley.webp" },
    { id: 71, name: "Harley", role: "Mage", damage: 9, durability: 2, cc: 3, image: "assets/harley.webp" },
    { id: 72, name: "Odette", role: "Mage", damage: 9, durability: 2, cc: 6, image: "assets/odette.webp" },
    { id: 73, name: "Pharsa", role: "Mage", damage: 9, durability: 2, cc: 5, image: "assets/pharsa.webp" },
    { id: 74, name: "Zhask", role: "Mage", damage: 9, durability: 3, cc: 5, image: "assets/zhask.webp" },
    { id: 75, name: "Valir", role: "Mage", damage: 8, durability: 3, cc: 7, image: "assets/valir.webp" },
    { id: 76, name: "Chang'e", role: "Mage", damage: 9, durability: 2, cc: 4, image: "assets/change.webp" },
    { id: 77, name: "Lunox", role: "Mage", damage: 9, durability: 3, cc: 4, image: "assets/lunox.webp" },
    { id: 78, name: "Harith", role: "Mage", damage: 8, durability: 3, cc: 5, image: "assets/harith.webp" },
    { id: 79, name: "Kimmy", role: "Marksman", damage: 9, durability: 2, cc: 3, image: "assets/kimmy.webp" },
    { id: 79, name: "Kimmy", role: "Mage", damage: 9, durability: 2, cc: 3, image: "assets/kimmy.webp" },
    { id: 80, name: "Esmeralda", role: "Tank", damage: 7, durability: 6, cc: 4, image: "assets/esmeralda.webp" },
    { id: 80, name: "Esmeralda", role: "Mage", damage: 7, durability: 6, cc: 4, image: "assets/esmeralda.webp" },
    { id: 81, name: "Lylia", role: "Mage", damage: 9, durability: 2, cc: 5, image: "assets/lylia.webp" },
    { id: 82, name: "Cecilion", role: "Mage", damage: 9, durability: 2, cc: 5, image: "assets/cecilion.webp" },
    { id: 83, name: "Lou Yi", role: "Mage", damage: 8, durability: 3, cc: 6, image: "assets/louyi.webp" },
    { id: 84, name: "Yve", role: "Mage", damage: 8, durability: 2, cc: 7, image: "assets/yve.webp" },
    { id: 85, name: "Valentina", role: "Mage", damage: 8, durability: 4, cc: 6, image: "assets/valentina.webp" },
    { id: 86, name: "Xavier", role: "Mage", damage: 9, durability: 2, cc: 5, image: "assets/xavier.webp" },
    { id: 113, name: "Novaria", role: "Mage", damage: 9, durability: 3, cc: 3, image: "assets/novaria.webp" },
    { id: 114, name: "Zhuxin", role: "Mage", damage: 7, durability: 4, cc: 9, image: "assets/zhuxin.webp" },
    { id: 125, name: "Vale", role: "Mage", damage: 1, durability: 2, cc: 7, image: "assets/vale.webp" },



    { id: 87, name: "Miya", role: "Marksman", damage: 8, durability: 2, cc: 3, image: "assets/miya.webp" },
    { id: 88, name: "Bruno", role: "Marksman", damage: 9, durability: 2, cc: 3, image: "assets/bruno.webp" },
    { id: 89, name: "Clint", role: "Marksman", damage: 8, durability: 3, cc: 4, image: "assets/clint.webp" },
    { id: 90, name: "Layla", role: "Marksman", damage: 9, durability: 1, cc: 2, image: "assets/layla.webp" },
    { id: 91, name: "Yi Sun-shin", role: "Assassin", damage: 8, durability: 3, cc: 4, image: "assets/yss.webp" },
    { id: 91, name: "Yi Sun-shin", role: "Marksman", damage: 8, durability: 3, cc: 4, image: "assets/yss.webp" },
    { id: 92, name: "Moskov", role: "Marksman", damage: 9, durability: 2, cc: 4, image: "assets/moskov.webp" },
    { id: 93, name: "Karrie", role: "Marksman", damage: 8, durability: 3, cc: 3, image: "assets/karrie.webp" },
    { id: 94, name: "Irithel", role: "Marksman", damage: 9, durability: 2, cc: 3, image: "assets/irithel.webp" },
    { id: 95, name: "Lesley", role: "Assassin", damage: 9, durability: 2, cc: 2, image: "assets/lesley.webp" },
    { id: 95, name: "Lesley", role: "Marksman", damage: 9, durability: 2, cc: 2, image: "assets/lesley.webp" },
    { id: 96, name: "Hanabi", role: "Marksman", damage: 8, durability: 3, cc: 4, image: "assets/hanabi.webp" },
    { id: 97, name: "Claude", role: "Marksman", damage: 9, durability: 2, cc: 3, image: "assets/claude.webp" },
    { id: 98, name: "Granger", role: "Marksman", damage: 9, durability: 2, cc: 3, image: "assets/granger.webp" },
    { id: 99, name: "Wanwan", role: "Marksman", damage: 8, durability: 2, cc: 4, image: "assets/wanwan.webp" },
    { id: 100, name: "Popol and Kupa", role: "Marksman", damage: 8, durability: 3, cc: 5, image: "assets/popolkupa.webp" },
    { id: 101, name: "Brody", role: "Marksman", damage: 7, durability: 4, cc: 5, image: "assets/brody.webp" },
    { id: 102, name: "Ixia", role: "Marksman", damage: 7, durability: 3, cc: 5, image: "assets/ixia.webp" },
    { id: 103, name: "Melissa", role: "Marksman", damage: 9, durability: 2, cc: 4, image: "assets/melissa.webp" },
    { id: 104, name: "Beatrix", role: "Marksman", damage: 8, durability: 3, cc: 1, image: "assets/beatrix.webp" },
    { id: 105, name: "Natan", role: "Marksman", damage: 6, durability: 2, cc: 2, image: "assets/natan.webp" }
];

const roleOrder = ["Tank", "Fighter", "Assassin", "Mage", "Marksman", "Support"];

const groupHeroesByRole = (heroes) => {
    const grouped = {};
    roleOrder.forEach(role => {
        grouped[role] = heroes.filter(hero => hero.role === role);
    });
    return grouped;
};

const ChevronIcon = ({ isExpanded }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {isExpanded ? (
            <polyline points="18 15 12 9 6 15" />
        ) : (
            <polyline points="6 9 12 15 18 9" />
        )}
    </svg>
);

const Alert = ({ children, style }) => (
    <div
        style={{
            padding: '16px',
            borderRadius: '8px',
            ...style
        }}
    >
        {children}
    </div>
);

const AlertTitle = ({ children, className }) => (
    <div
        style={{
            fontSize: '1.1em',
            fontWeight: 'bold',
            marginBottom: '8px'
        }}
        className={className}
    >
        {children}
    </div>
);

const AlertDescription = ({ children }) => (
    <div style={{ fontSize: '0.95em' }}>
        {children}
    </div>
);

const patchNotes = [
    // put new patch notes here
    {
        version: "1.1.1",
        date: "2024-10-07",
        changes: [
            "Minor UI adjustment"
        ]
    },
    {
        version: "1.1.0",
        date: "2024-10-07",
        changes: [
            "Added role filtering system",
            "Improved UI responsiveness",
            "Added team statistics calculation",
            "Implemented reset functionality",
            "Added [Team Advantage Analysis] after both team picked their hero compositions",
            "Added all 125 heroes",
            "Added team stats analysis (damage, durability, CC)",
            "Included role diversity evaluation",
            "Added support and tank presence analysis",
            "Created a detailed explanation system that highlights specific advantages",
            "Improved the visual presentation of the analysis",
            "The component will now show why one team has an advantage over the other, or why they're evenly matched"
        ]
    },
    {
        version: "1.0.0",
        date: "2024-10-06",
        changes: [
            "Initial release of MLBB Team Composition Analyzer",
            "Added hero selection system",
            "Implemented team composition analysis",
            "Added light/dark mode toggle"
        ]
    }
];

const BulletinBoard = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bulletin-board">
            <div
                className="bulletin-header"
                onClick={toggleExpand}
                style={{
                    backgroundColor: 'var(--card-background)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <h2 style={{ margin: 0 }}>Website Adjustments</h2>
                <ChevronIcon isExpanded={isExpanded} />
            </div>

            <div className={`bulletin-content ${isExpanded ? 'expanded' : ''}`}
                style={{
                    maxHeight: isExpanded ? '1000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out',
                    marginBottom: isExpanded ? '20px' : '0'
                }}
            >
                {patchNotes.map((patch, index) => (
                    <Alert
                        key={index}
                        style={{
                            marginBottom: '10px',
                            backgroundColor: 'var(--card-background)',
                            border: '1px solid var(--card-border)'
                        }}
                    >
                        <AlertTitle className="flex justify-between items-center">
                            <span>Version {patch.version}</span>
                            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>{patch.date}</span>
                        </AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc pl-5 mt-2">
                                {patch.changes.map((change, changeIndex) => (
                                    <li key={changeIndex}>{change}</li>
                                ))}
                            </ul>
                        </AlertDescription>
                    </Alert>
                ))}
            </div>
        </div>
    );
};

const SVGIcon = ({ name }) => {
    switch (name) {
        case 'damage':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3l-6 4-6-4-6 5v13h18V8z"></path>
                </svg>
            );
        case 'durability':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            );
        case 'cc':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            );
        default:
            return null;
    }
};

const HeroCard = ({ hero, onAddToTeam, isSelected }) => (
    <div className="hero-card">
        <img src={hero.image} alt={hero.name} className="hero-image" />
        <div className="hero-name">{hero.name}</div>
        <div className="hero-stats">
            <div className="stat"><SVGIcon name="damage" /> {hero.damage}</div>
            <div className="stat"><SVGIcon name="durability" /> {hero.durability}</div>
            <div className="stat"><SVGIcon name="cc" /> {hero.cc}</div>
        </div>
        <div className="button-group">
            <button
                className="blue-button"
                onClick={() => onAddToTeam(hero, 'blue')}
                disabled={isSelected}
            >
                Add to Blue
            </button>
            <button
                className="red-button"
                onClick={() => onAddToTeam(hero, 'red')}
                disabled={isSelected}
            >
                Add to Red
            </button>
        </div>
    </div>
);

const TeamDisplay = ({ team, teamName, teamStats }) => (
    <div className={`team ${teamName}-team`}>
        <h2>{teamName === 'blue' ? 'Blue Team' : 'Red Team'}</h2>
        <ul className="team-heroes">
            {team.map(hero => (
                <li key={hero.id} className="team-hero">
                    <img src={hero.image} alt={hero.name} className="team-hero-image" />
                    <span>{hero.name} - {hero.role}</span>
                </li>
            ))}
        </ul>
        {team.length === 5 && (
            <div>
                <h3>Team Stats:</h3>
                <p>Damage: {teamStats.damage}</p>
                <p>Durability: {teamStats.durability}</p>
                <p>CC: {teamStats.cc}</p>
            </div>
        )}
    </div>
);

const TeamAnalysis = ({ blueTeam, redTeam }) => {
    const Card = ({ children, className }) => (
        <div className={`rounded-lg border shadow-sm ${className}`}>
            {children}
        </div>
    );

    const CardHeader = ({ children, className }) => (
        <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
            {children}
        </div>
    );

    const CardContent = ({ children, className }) => (
        <div className={`p-6 pt-0 ${className}`}>
            {children}
        </div>
    );

    const Shield = ({ className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );

    const Swords = ({ className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
            <line x1="13" y1="19" x2="19" y2="13" />
            <line x1="16" y1="16" x2="20" y2="20" />
            <line x1="19" y1="21" x2="21" y2="19" />
            <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
            <line x1="5" y1="14" x2="9" y2="18" />
            <line x1="7" y1="17" x2="4" y2="20" />
            <line x1="3" y1="19" x2="5" y2="21" />
        </svg>
    );

    const Users = ({ className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );

    const analyzeTeamComposition = (team) => {
        const roles = team.map(hero => hero.role);
        const uniqueRoles = [...new Set(roles)];
        return {
            roles: roles,
            uniqueRoles: uniqueRoles,
            hasTank: roles.includes('Tank'),
            hasFighter: roles.includes('Fighter'),
            hasAssassin: roles.includes('Assassin'),
            hasMage: roles.includes('Mage'),
            hasMarksman: roles.includes('Marksman'),
            hasSupport: roles.includes('Support'),
            avgDamage: team.reduce((sum, hero) => sum + hero.damage, 0) / team.length,
            avgDurability: team.reduce((sum, hero) => sum + hero.durability, 0) / team.length,
            avgCC: team.reduce((sum, hero) => sum + hero.cc, 0) / team.length
        };
    };

    const determineAdvantage = (blueAnalysis, redAnalysis) => {
        if (blueTeam.length !== 5 || redTeam.length !== 5) {
            return null;
        }

        let blueScore = 0;
        let redScore = 0;
        let explanation = [];

        // Analysis logic remains the same
        const essentialRoles = ['Tank', 'Fighter', 'Mage', 'Marksman'];
        essentialRoles.forEach(role => {
            if (blueAnalysis.roles.includes(role)) blueScore++;
            if (redAnalysis.roles.includes(role)) redScore++;
        });

        if (blueAnalysis.uniqueRoles.length > redAnalysis.uniqueRoles.length) {
            blueScore += 0.5;
            explanation.push("Blue team has better role diversity");
        } else if (redAnalysis.uniqueRoles.length > blueAnalysis.uniqueRoles.length) {
            redScore += 0.5;
            explanation.push("Red team has better role diversity");
        }

        if (blueAnalysis.hasSupport && !redAnalysis.hasSupport) {
            blueScore += 0.5;
            explanation.push("Blue team has a support hero for better team sustain");
        } else if (redAnalysis.hasSupport && !blueAnalysis.hasSupport) {
            redScore += 0.5;
            explanation.push("Red team has a support hero for better team sustain");
        }

        if (blueAnalysis.hasTank && !redAnalysis.hasTank) {
            blueScore += 0.5;
            explanation.push("Blue team has a tank for better frontline");
        } else if (redAnalysis.hasTank && !blueAnalysis.hasTank) {
            redScore += 0.5;
            explanation.push("Red team has a tank for better frontline");
        }

        const statsComparison = [];
        if (blueAnalysis.avgDamage > redAnalysis.avgDamage + 1) {
            blueScore += 0.3;
            statsComparison.push("higher damage output");
        } else if (redAnalysis.avgDamage > blueAnalysis.avgDamage + 1) {
            redScore += 0.3;
            statsComparison.push("higher damage output");
        }

        if (statsComparison.length > 0) {
            if (blueScore > redScore) {
                explanation.push(`Blue team has ${statsComparison.join(" and ")}`);
            } else if (redScore > blueScore) {
                explanation.push(`Red team has ${statsComparison.join(" and ")}`);
            }
        }

        return {
            advantageTeam: blueScore > redScore ? 'blue' : redScore > blueScore ? 'red' : 'even',
            blueScore,
            redScore,
            explanation: explanation.length > 0 ? explanation : ["Both teams have balanced compositions with similar strengths"]
        };
    };

    const getMissingRoles = (analysis) => {
        const essentialRoles = ['Tank', 'Fighter', 'Mage', 'Marksman'];
        return essentialRoles.filter(role => !analysis.roles.includes(role));
    };

    const blueAnalysis = analyzeTeamComposition(blueTeam);
    const redAnalysis = analyzeTeamComposition(redTeam);
    const advantage = determineAdvantage(blueAnalysis, redAnalysis);

    if (!advantage) return null;

    const blueMissing = getMissingRoles(blueAnalysis);
    const redMissing = getMissingRoles(redAnalysis);

    const getBackgroundColor = () => {
        switch (advantage.advantageTeam) {
            case 'blue':
                return 'bg-blue-100 dark:bg-blue-950';
            case 'red':
                return 'bg-red-100 dark:bg-red-950';
            default:
                return 'bg-gray-100 dark:bg-gray-900';
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 mb-8">
            <Card className={`${getBackgroundColor()} transition-colors duration-300`}>
                <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl md:text-2xl font-bold">Team Advantage Analysis</h3>
                        {advantage.advantageTeam !== 'even' && (
                            <Shield className={`w-6 h-6 ${advantage.advantageTeam === 'blue' ? 'text-blue-600' : 'text-red-600'}`} />
                        )}
                    </div>
                    <p className="text-lg font-semibold">
                        {advantage.advantageTeam === 'even'
                            ? 'Teams are evenly matched!'
                            : `${advantage.advantageTeam.charAt(0).toUpperCase() + advantage.advantageTeam.slice(1)} team has an advantage`}
                    </p>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <h4 className="font-semibold flex items-center gap-2">
                            <Swords className="w-5 h-5" />
                            Key Advantages
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                            {advantage.explanation.map((exp, index) => (
                                <li key={index} className="text-sm md:text-base">{exp}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Users className="w-5 h-5 text-blue-600" />
                                Blue Team Composition
                            </h4>
                            <p className="text-sm md:text-base">
                                {blueMissing.length > 0
                                    ? `Missing: ${blueMissing.join(', ')}`
                                    : 'Good role coverage!'}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Users className="w-5 h-5 text-red-600" />
                                Red Team Composition
                            </h4>
                            <p className="text-sm md:text-base">
                                {redMissing.length > 0
                                    ? `Missing: ${redMissing.join(', ')}`
                                    : 'Good role coverage!'}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

function App() {
    const [blueTeam, setBlueTeam] = React.useState([]);
    const [redTeam, setRedTeam] = React.useState([]);
    const [selectedRole, setSelectedRole] = React.useState("Tank");
    const [isDarkMode, setIsDarkMode] = React.useState(false)

    React.useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            isDarkMode ? 'dark' : 'light'
        );
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const resetTeams = () => {
        setBlueTeam([]);
        setRedTeam([]);
        setSelectedRole("Tank");
    };

    const groupedHeroes = React.useMemo(() => groupHeroesByRole(heroes), []);

    const addHero = (hero, team) => {
        if (team === 'blue' && blueTeam.length < 5) {
            setBlueTeam([...blueTeam, hero]);
        } else if (team === 'red' && redTeam.length < 5) {
            setRedTeam([...redTeam, hero]);
        }
    };

    const calculateTeamStats = (team) => {
        if (team.length === 0) return { damage: 0, durability: 0, cc: 0 };
        const stats = team.reduce((acc, hero) => {
            acc.damage += hero.damage;
            acc.durability += hero.durability;
            acc.cc += hero.cc;
            return acc;
        }, { damage: 0, durability: 0, cc: 0 });

        return {
            damage: (stats.damage / team.length).toFixed(1),
            durability: (stats.durability / team.length).toFixed(1),
            cc: (stats.cc / team.length).toFixed(1),
        };
    };

    const isHeroSelected = (hero) => {
        return blueTeam.some(h => h.id === hero.id) || redTeam.some(h => h.id === hero.id);
    };

    const Footer = () => {
        return (
            <footer className="footer">
                <div className="social-icons">
                    <a href="https://x.com/chocolatemintt1" target="_blank" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@konose_1" target="_blank" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/smurf.carloamparo22" target="_blank" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@chocolatemintt1?lang=en" target="_blank" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5z" />
                            <line x1="10" y1="12" x2="14" y2="12" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/chocolatemintt1/" target="_blank" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>
                </div>
                <div className="copyright">
                    © 2024 All rights reserved
                    <div>Programmed by Carlo Amparo</div>
                </div>
            </footer>
        );
    };

    return (
        <div className="container">
            <div className="header-controls">
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    )}
                </button>
                <button
                    className="reset-button"
                    onClick={resetTeams}
                    aria-label="Reset teams"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 2v6h6"></path>
                        <path d="M3 13a9 9 0 1 0 3-7.7L3 8"></path>
                    </svg>
                    Reset Teams
                </button>
            </div>
            <h1>MLBB Team Composition Analyzer</h1>
            <div className="team-container">
                <TeamDisplay team={blueTeam} teamName="blue" teamStats={calculateTeamStats(blueTeam)} />
                <TeamDisplay team={redTeam} teamName="red" teamStats={calculateTeamStats(redTeam)} />
            </div>
            {(blueTeam.length === 5 && redTeam.length === 5) && (
                <div className="mb-4">
                    <TeamAnalysis blueTeam={blueTeam} redTeam={redTeam} />
                </div>
            )}
            <h2>Available Heroes</h2>
            <div className="role-selector">
                {roleOrder.map(role => (
                    <button
                        key={role}
                        onClick={() => setSelectedRole(role)}
                        className={`role-button ${selectedRole === role ? 'selected' : ''}`}
                    >
                        {role}
                    </button>
                ))}
            </div>
            <div className="hero-list">
                {groupedHeroes[selectedRole].map(hero => (
                    <HeroCard
                        key={hero.id}
                        hero={hero}
                        onAddToTeam={addHero}
                        isSelected={isHeroSelected(hero)}
                    />
                ))}
            </div>
            <BulletinBoard />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
