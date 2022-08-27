import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item,
  onChange: (id: Number, done: boolean) => void,
  deleteTask: (id: Number) => void,
}

export const ListItem = ({ item, onChange, deleteTask }: Props) => {
  return (
    <C.Container done={ item.done } >
      <input
        type="checkbox"
        checked={ item.done }
        onChange={e => onChange(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
      <span
        className="delete"
        onClick={() => deleteTask(item.id)}
      >
        🗑️
      </span>
    </C.Container>
  );
}