export default async function CategoryId({
  params,
}: {
  params: Promise<{ categoriesId: string }>;
}) {
  const { categoriesId } = await params;
  return (
    <div>
      <h1>{categoriesId}</h1>
    </div>
  );
}
