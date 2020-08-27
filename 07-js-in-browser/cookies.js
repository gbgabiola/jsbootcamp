document.cookie = 'name=Genesis';
// document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
document.cookie = 'age=27';
document.cookie = 'car=Ford';

document.cookie.split(';').filter(item => {
  if (item.includes('name=')) return true;
});

// Get the cookie value
const getCookieValue = name => {
  const theCookie = document.cookie.split(';').filter(item => {
    if (item.includes(name + '=')) return true;
  });

  if (theCookie.length === 0) return false;

  return theCookie[0].split('=')[1];
}
