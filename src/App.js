export default function App() {

  let students = [
    {
      id: '1',
      name: 'Nguyen Van Teo',
      className: 'CNTT'
    },
    {
      id: '2',
      name: 'Nguyen Van Ti',
      className: 'DTVT'
    },
    {
      id: '3',
      name: 'Tran Van Tun',
      className: 'THXD'
    },
    {
      id: '4',
      name: 'Nguyen Thi Heo',
      className: 'CNTT'
    },
    {
      id: '5',
      name: 'Le Thi Be',
      className: 'XDDD'
    }
  ]

  let classList = [
    {
      id: '1',
      name: "CNTT"
    },
    {
      id: '2',
      name: 'DTVT'
    },
    {
      id: '3',
      name: 'THXD'
    },
    {
      id: '4',
      name: 'XDDD'
    }
  ]

  return (
    <>
      <h1>Danh sách sinh viên</h1>
      <table border="1px" style={{ width: 400 }}>
        <thead>
          <tr>
            <th>Tên sinh viên</th>
            <th>Lớp</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student =>
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.className}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
      <br />
      <form>
        <div>
          <label>Tên sinh viên</label>
          <input />
        </div>
        <br />
        <div>
          <label>Lớp</label>
          <select>
            <option value=''>-- Chọn lop --</option>
            {classList.map(cl =>
              <option key={cl.id} value={cl.name}>{cl.name}</option>
            )}
          </select>
        </div>
        <div>
          <button>Thêm</button>
        </div>
      </form>
    </>
  )
}
