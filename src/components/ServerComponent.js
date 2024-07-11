//components rendered on the server side.to optimize server side rendering logic.
export default function ServerComponent() {
  return (
    <div>
      <p>This is rendered on the server</p>
    </div>
  );
}
// to improve the initial load time of web, rendering on server before sending to client