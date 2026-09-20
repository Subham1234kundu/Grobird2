import AuditDefinition from "./AuditDefinition";
import DiscoveryProcess from "./DiscoveryProcess";

export default function AuditDiscoverySection() {
  return (
    <section className="relative isolate overflow-x-clip bg-black">
      <AuditDefinition />
      <DiscoveryProcess />
    </section>
  );
}
