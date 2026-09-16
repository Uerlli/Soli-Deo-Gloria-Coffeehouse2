export interface MenuItem {
  id: string;
  name: string;
  desc?: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'cafes',
    label: 'Cafés',
    items: [
      { id: 'espresso', name: 'Espresso', price: 'R$ 8' },
      { id: 'cafe-com-leite', name: 'Café com leite', price: 'R$ 14' },
      { id: 'cappuccino', name: 'Cappuccino', price: 'R$ 16' },
      { id: 'frappuccino', name: 'Frappuccino', price: 'R$ 18' },
      { id: 'latte-avela', name: 'Latte de avelã', price: 'R$ 16' },
      { id: 'cafe-coado', name: 'Café coado', price: 'R$ 12' },
      { id: 'cold-brew', name: 'Cold brew', price: 'R$ 18' },
      { id: 'cafe-americano', name: 'Café americano', price: 'R$ 12' },
      { id: 'iced-matcha-latte', name: 'Iced matcha latte', desc: 'com morango', price: 'R$ 22' },
      { id: 'ice-latte', name: 'Ice latte', desc: 'com doce de leite da casa', price: 'R$ 16' },
    ],
  },
  {
    id: 'new-drinks',
    label: 'New Drinks',
    items: [
      { id: 'refresher', name: 'Refresher — Summer Sensation', desc: 'hibisco e morango', price: 'R$ 16' },
      { id: 'cotton-candy', name: 'Cotton Candy Limeade', price: 'R$ 16' },
      { id: 'hydration-pacote', name: 'Hydration Pacote', price: 'R$ 14' },
      { id: 'milkshake-oreo', name: 'Milk-shake de Oreo', price: 'R$ 26' },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    items: [
      { id: 'soda-italiana', name: 'Soda italiana', price: 'R$ 12' },
      { id: 'refri-lata', name: 'Refri (lata)', price: 'R$ 8' },
      { id: 'schweppes', name: 'Schweppes', price: 'R$ 7' },
      { id: 'cha-matte-limao', name: 'Chá matte com limão', price: 'R$ 12' },
      { id: 'cha-matte-suica', name: 'Chá matte suíça', price: 'R$ 15' },
      { id: 'cha-matte-gengibre', name: 'Chá matte com gengibre', price: 'R$ 14' },
      { id: 'laranjai', name: 'Laranjai', price: 'R$ 18' },
      { id: 'pina-colada', name: 'Piña colada', price: 'R$ 19' },
      { id: 'kombucha', name: 'Kombucha', price: 'R$ 14' },
      { id: 'frozen-siciliano', name: 'Frozen morango/limonada siciliano', price: 'R$ 16' },
      { id: 'smoothie-natural', name: 'Smoothie natural', desc: 'banana, morango e leite', price: 'R$ 22' },
      { id: 'agua', name: 'Água', price: 'R$ 4' },
      { id: 'agua-com-gas', name: 'Água com gás', price: 'R$ 4' },
      { id: 'cha-preto', name: 'Chá preto', price: 'R$ 16' },
    ],
  },
  {
    id: 'gelados',
    label: 'Gelados',
    items: [
      { id: 'affogato', name: 'Affogato', price: 'R$ 12' },
      { id: 'frosty', name: 'Frosty', desc: 'limonada com sorvete', price: 'R$ 18' },
      { id: 'avela-shake', name: 'Avelã shake', price: 'R$ 20' },
      { id: 'cookie-shake', name: 'Cookie shake', price: 'R$ 22' },
      { id: 'coffee-shake', name: 'Coffee shake', price: 'R$ 20' },
      { id: 'banoffee-shake', name: 'Banoffee shake', price: 'R$ 22' },
      { id: 'ovomaltine-shake', name: 'Ovomaltine shake', price: 'R$ 20' },
      { id: 'casquinha', name: 'Casquinha pequena', price: 'R$ 5' },
      { id: 'pizookie', name: 'Pizookie', price: 'R$ 14' },
      { id: 'creme-cupuacu', name: 'Creme de cupuaçu', desc: 'com leite ninho e granola', price: 'R$ 16' },
      { id: 'acai-tigela', name: 'Açaí na tigela', desc: 'com granola', price: 'R$ 27' },
    ],
  },
  {
    id: 'novidades',
    label: 'Novidades',
    items: [
      { id: 'breakfast-sandwich', name: 'Breakfast Sandwich', desc: 'scone, queijo, ovo e bacon', price: 'R$ 18' },
      { id: 'fried-chicken-waffles', name: 'Fried Chicken and Waffles', price: 'R$ 39' },
      { id: 'chicken-nuggets-fries', name: 'Chicken Nuggets and Fries', price: 'R$ 45' },
      { id: 'linguica-artesanal', name: 'Linguiça artesanal', price: 'R$ 36' },
      { id: 'sanduiche-focaccia', name: 'Sanduíche de Focaccia', price: 'R$ 45' },
    ],
  },
  {
    id: 'salgados',
    label: 'Salgados',
    items: [
      { id: 'scone', name: 'Scone', desc: 'queijo', price: 'R$ 8' },
      { id: 'sanduiche-frango', name: 'Sanduíche', desc: 'frango', price: 'R$ 29' },
      { id: 'pao-de-queijo', name: 'Pão de queijo', price: 'R$ 7' },
      { id: 'waffle-pao-queijo', name: 'Waffle de pão de queijo', price: 'R$ 16' },
      { id: 'green-protein-salad', name: 'Green protein salad', price: 'R$ 35' },
      { id: 'american-breakfast', name: 'American breakfast', desc: 'panqueca, ovo, bacon e maple syrup', price: 'R$ 35' },
      { id: 'hamburger-fritas', name: 'Hamburger & fritas', price: 'R$ 35' },
      { id: 'espetinho-frango', name: 'Espetinho de frango', desc: 'vinagrete e farofa', price: 'R$ 16' },
    ],
  },
  {
    id: 'tortas-doces',
    label: 'Tortas e Doces',
    items: [
      { id: 'cheesecake-dia', name: 'Cheesecake do dia', price: 'R$ 18' },
      { id: 'apple-pie', name: 'Apple pie', price: 'R$ 24' },
      { id: 'banoffee', name: 'Banoffee', price: 'R$ 18' },
      { id: 'pecan-pie', name: 'Pecan pie', price: 'R$ 18' },
      { id: 'cookie-bar', name: 'Cookie bar', price: 'R$ 16' },
      { id: 'cookie', name: 'Cookie', price: 'R$ 12' },
      { id: 'cookie-especial', name: 'Cookie especial', price: 'R$ 14' },
      { id: 'croissant', name: 'Croissant', desc: 'amêndoas', price: 'R$ 19' },
      { id: 'blondies', name: 'Blondies', price: 'R$ 12' },
      { id: 'cinnamon-roll', name: 'Cinnamon roll', price: 'R$ 10' },
    ],
  },
  {
    id: 'bolos',
    label: 'Bolos',
    items: [
      { id: 'bolo-do-dia', name: 'Bolo do dia', price: 'R$ 16' },
      { id: 'bolo-especial', name: 'Bolo especial', price: 'R$ 18' },
    ],
  },
];

// Subconjunto usado na prévia do cardápio na home
export const menuPreviewCategoryIds = ['cafes', 'salgados', 'tortas-doces'];

export const ritualSteps = [
  { id: 'origem', title: 'Origem', text: 'Grãos de produtores parceiros, comprados por safra e escolhidos a dedo a cada lote.' },
  { id: 'torra', title: 'Torra', text: 'Torra clara conduzida em pequenos lotes para preservar doçura, acidez e caráter do grão.' },
  { id: 'moagem', title: 'Moagem', text: 'Moído na hora, calibrado xícara a xícara. O aroma é parte do serviço.' },
  { id: 'preparo', title: 'Preparo', text: 'Água na temperatura certa, tempo medido, mãos atentas. Um ritual curto e preciso.' },
];

export const experienceItems = [
  { id: 'e1', title: 'Degustações guiadas', text: 'Sessões intimistas para provar variações de Cold Brew, Iced Motcha Latte, Frappuccino e outros acompanhado de fatias de torta e cookies quentinhos, descobrindo na prática qual combinação destaca o recheio e a textura de cada clássico da cozinha americana.' },
  { id: 'e2', title: 'Encontros e conversas', text: 'A mesa comunal existe para isso. Traga um assunto e alguém para dividir.' },
  { id: 'e3', title: 'Celebrações discretas', text: 'Aniversários, fechamentos, reencontros. Sem palco, sem ruído — só a ocasião bem cuidada.' },
];