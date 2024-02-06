export default function WelcomeBox({ userInput }) {
  return (
    <div className="flex flex-col justify-center items-center bg-lime-900 rounded text-white w-96 h-24 text-center drop-shadow-xl">
      <h1 className="font-light text-xl">
        Let's get productive, {userInput.name}!
      </h1>
    </div>
  );
}
