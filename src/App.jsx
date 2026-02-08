import Section from "./components/Section";

import PaintingList from "./components/PaintingList";

import paintings from './json/paintings.json'

export default function App() {
  return (
    <div>
      {/* //? Paintings */}
      <Section title="Колекція картин">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
