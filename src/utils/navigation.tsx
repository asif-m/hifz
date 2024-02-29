export function navigateToUrlAndReload(navigate: any, path: string) {
  navigate(path, { replace: true });
  setTimeout(function () {
    location.reload();
  }, 500);
}
