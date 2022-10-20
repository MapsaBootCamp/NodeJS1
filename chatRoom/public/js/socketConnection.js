const form = document.getElementById('form');
const input = document.getElementById('input');
const groupId = document.getElementById('groupId');

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const token = getCookie("access-token")

var socket = io(`/chat/${groupId.value}`, {
    query: {
      groupId: groupId.value,
    },
    auth: {
        token: token
      }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', {
        chatContent: input.value,
        groupId: groupId.value
    });
    input.value = '';
  }
});

socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });