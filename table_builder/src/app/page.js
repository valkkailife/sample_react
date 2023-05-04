
const data = require('./data.json')
export default function Home() {
  return (
    <main>
      <div>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>yob</th>
              <th>course</th>
            </tr>
          </thead>
          {data.map((obj, idx) => {
            return (<tbody>
              <tr>
                <td>{obj.name}</td>
                <td>{obj.yob}</td>
                <td>{obj.course}</td>
              </tr>
            </tbody>)
          })}
        </table>

      </div>

      {/* <Table /> */}
    </main>
  )
}
