function StudentList() {
  const students = [
    {
      id: 1,
      name: "Juhi",
    },
    {
      id: 2,
      name: "Priyal",
    },
    {
      id: 3,
      name: "Mili",
    },
  ];

  return (
    <>
      <h1>Student List</h1>

      {students.map((student) => (
        <p key={student.id}>{student.name}</p>
      ))}
    </>
  );
}

export default StudentList;