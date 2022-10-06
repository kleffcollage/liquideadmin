interface ICheckbox {
  checked: any;
  onChange: any;
}
export const TableCheckbox = ({ checked, onChange }: ICheckbox) => {
  return (
    <input
      type="checkbox"
      className="formcheck"
      checked={checked}
      onChange={onChange}
      value={checked || ''}
    />
  );
};
