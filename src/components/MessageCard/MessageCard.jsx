function MessageCard({ message, isLargeSize }) {
  return (
    <div
      className={`bg-black text-white text-center ${
        isLargeSize ? `w-full bg-yellow-500` : ''
      }`}
    >
      <h4 className="p-2">{message}</h4>
    </div>
  );
}

export default MessageCard;
