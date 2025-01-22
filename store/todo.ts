import { atom} from 'nanostores';
export type ToDo = { id: number; text: string; checked: boolean };

export const $todo = atom<ToDo[]>([]);

export function addItem(item: ToDo) {
    $todo.set([...$todo.get(), item]);
}

export function toggleItem(id: number) {
    const
        index = [...$todo.get()].findIndex(el => el.id == id),
        value = { ...$todo.get()[index] };
    value.checked = !value.checked;
    $todo.set([...$todo.get()].with(index, { ...value }));

}

export function delItem(id: number) {
    $todo.set([...$todo.get()].filter(item => item.id != id));
}