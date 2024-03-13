import { useState } from 'react';

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

  const [listStudents, setListStudents] = useState(students);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const [errorName, setErrorName] = useState('');
  const [errorClass, setErrorClass] = useState('');

  const handleBlur = (e) => {
    if (e.target.name === 'name') {
      if (!e.target.value) {
        setErrorName('Vui lòng nhập tên');
      }
    } else if (e.target.name === 'class') {
      if (!e.target.value) {
        setErrorClass('Vui lòng chon lop');
      }
    }
  }

  const handleInput = (e) => {
    if (e.target.name === 'name') {
      setErrorName('');
    } else if (e.target.name === 'class') {
      setErrorClass('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let check = true;
    if (!name) {
      setErrorName('Vui lòng nhập tên');
      check = false;
    }
    if (!className) {
      setErrorClass('Vui lòng chon lop');
      check = false;
    }

    function generateUuid() {
      return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 || 0x8);
        return v.toString(16);
      });
    }

    if (check) {
      if (isEdit) {
        let idx = listStudents.findIndex(student => student.id === id);
        let inputValue = {
          id,
          name,
          className
        }
        listStudents.splice(idx, 1, inputValue);
        setListStudents(listStudents);
        setId('');
        setName('');
        setClassName('');
        setIsEdit(false);
      } else {
        let inputValue = {
          id: generateUuid(),
          name,
          className
        }
        listStudents.push(inputValue);
        setListStudents(listStudents);
        setName('');
        setClassName('');
      }
    }
  }

  const handleClickEdit = (student) => {
    setId(student.id);
    setName(student.name);
    setClassName(student.className);
    setIsEdit(true);
  }

  const handleDelete = (student) => {
    if (window.confirm('Bạn có chắc muốn xóa ?')) {
      let newList = listStudents.filter(std => std.id !== student.id);
      setListStudents(newList);
    }
  }

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
          {listStudents.map(student =>
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.className}</td>
              <td>
                <button onClick={() => handleClickEdit(student)}>Sửa</button>
                <button onClick={() => handleDelete(student)}>Xóa</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        {isEdit && <input type='hidden' value={id} />}
        <div>
          <label>Tên sinh viên</label>
          <input type="text" name="name" placeholder="Nhập tên sinh viên" value={name}
            onBlur={(e) => handleBlur(e)}
            onInput={(e) => handleInput(e)}
            className={errorName && 'invalid'}
            onChange={(e) => { setName(e.target.value) }}
          />
          <br />
          <span style={{
            color: 'red',
            fontStyle: 'italic'
          }}>{errorName}</span>
        </div>
        <br />
        <div>
          <label>Lớp</label>
          <select value={className} onChange={(e) => { setClassName(e.target.value) }}
            name="class" className={errorClass && 'invalid'}
            onBlur={e => handleBlur(e)} onInput={e => handleInput(e)}
          >
            <option value=''>-- Chọn lop --</option>
            {classList.map(cl =>
              <option key={cl.id} value={cl.name}>{cl.name}</option>
            )}
          </select>
          <br />
          <span style={{
            color: 'red',
            fontStyle: 'italic'
          }}>{errorClass}</span>
          <span />
        </div>
        <div>
          <button>{isEdit ? 'Sửa' : 'Thêm'}</button>
        </div>
      </form>
    </>
  )
}
