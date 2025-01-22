import { NanoCounter } from "@/components/nanostores-counter";
import {NanoTodo} from "@/components/nanostores-todo";

export default function Home() {
  return     <>
  <main>
     <h2>Nanostores</h2>
      <NanoCounter />
      <br />
      <br />
      <NanoTodo />
      </main>
    </>
}
