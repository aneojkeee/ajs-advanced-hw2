export default function availableAttackTypes({ special }) {
  const result = [];
  for (const {
    id,
    name,
    description = "Описание недоступно",
    icon,
  } of special) {
    const obj = {
      id,
      name,
      description,
      icon,
    };
    result.push(obj);
  }
  return result;
}
