import AppLayout from "@/layouts/AppLayout";
import CreateMessageForm from "@/features/messages/CreateMessageForm";
function Home() {
  return (
    <AppLayout>
      <div className="rounded-[22px] bg-white/1 p-5 backdrop-blur-[15px] lg:max-w-[50%]">
        <p className="mb-10 text-2xl leading-normal text-white lg:text-4xl">
          <strong>ShareMessage</strong> is fun project that you can create message with cool
          animation and share with your friends.
        </p>
        <CreateMessageForm />
      </div>
    </AppLayout>
  );
}

export default Home;
