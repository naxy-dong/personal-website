function CourseItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

export default CourseItem;
