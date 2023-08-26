import DefaultTable from "@/components/Reservations/DefaultTable/DefaultTable";
import GroupByTImeTable from "@/components/Reservations/GroupByTimeTable/GroupByTImeTable";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <p>hii</p>
      {/* <DefaultTable /> */}
      <GroupByTImeTable />
    </main>
  );
}
