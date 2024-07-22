import AdoptForm from "@/components/AdoptForm";
import ClientLayout from "@/layout/ClientLayout";

export default function page() {
  return (
    <ClientLayout>
      <div className="relative flex min-h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/image-adopt.jpeg')" }}>
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#1f9063]">Formulario de Adopción</h2>
          <AdoptForm />
        </div>
      </div>
    </ClientLayout>
  );
}
