import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { HelloAnchor } from "../target/types/hello_anchor";

describe("hello-anchor", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.HelloAnchor as Program<HelloAnchor>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });

  it("Is sets data counter!", async () => {
    // Add your test here.
    let counter: u64 = 10;
    let my
    const tx = await program.methods.setData(counter).rpc();
    console.log("Counter value is: ", counter);
    console.log("Your transaction signature", tx);
  });
});
