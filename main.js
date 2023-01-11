// alert("good afternoon")
const networkSpan = document.getElementById('network')

function checkPhoneNumber(event) {
  if ((event.key >= 48 && event.key <= 57) || (event.key >= 96 && event.key <= 105)) {

  } else {
    event.target.value = event.target.value.replace(/[a-z ]/ig, '')
  }


  const phoneNumber = event.target.value;
  if (phoneNumber.length === 11) {
    const network = phoneEngine(phoneNumber);
    if (network) {
      ShowNetworkImage(network)
    } else {
      networkSpan.innerHTML = "enter a valid number"
    }
  }
}
function ShowNetworkImage (network) {
  const NetworkImage = document.createElement('img');
  NetworkImage.setAttribute('src', `${network}.png`);
  networkSpan.replaceChildren(NetworkImage);
}

function phoneEngine(phoneNumber) {
  identifier = phoneNumber.slice(0, 4);
  switch (identifier) {
    case "0802":
    case "0812":
    case "0807":
    case "0817":
    case "0904":
    case "0901":
    case "0708":
    case "0701":
    case "0902":
    case "0912":
    case "0907":
      return "Airtel";

    case "0803":
    case "0806":
    case "0816":
    case "0813":
    case "0814":
    case "0704":
    case "0906":
    case "0903":
      return "MTN";

    case "0809":
    case "0817":
    case "0818":
    case "0908":
      return "ETISALAT";

    case "0805":
    case "0807":
    case "0705":
    case "0815":
    case "0811":
    case "0905":
    case "0915":
      return "GLO";
    default:
      return null;
  }
}
