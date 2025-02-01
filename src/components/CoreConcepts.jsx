import CoreConcepts from "./Core_Concepts.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";

export default function CoreConceptsComponent() {
  return (
    <Section id="core-concepts" title="Core concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcepts key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
