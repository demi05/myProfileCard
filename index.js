time = document.getElementById("time");

const getCurrentUTCTime = () => {
  const now = new Date();
  return now.toUTCString();
};

console.log(getCurrentUTCTime());
time.innerHTML = getCurrentUTCTime();
