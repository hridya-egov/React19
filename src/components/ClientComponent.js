//this is to show that component should be rendered on the client side. This feature is to optimize the rendering
'use client'; // This directive specifies that this is a Client Component

export default function ClientComponent() {
  return (
    <div>
      <p>This is rendered on the client</p>
    </div>
  );
}
