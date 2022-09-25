export default function Naira(value: string | null | undefined) {
  return `₦${value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
