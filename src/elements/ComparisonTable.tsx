import { clean } from '../cms/sanitize'
import type { ComparisonTableElement } from '../cms/types'

export default function ComparisonTable({ el }: { el: ComparisonTableElement }) {
  return (
    <table className="compare-table">
      <tbody>
        <tr>
          <th>{el.headers[0]}</th>
          <th>{el.headers[1]}</th>
        </tr>
        {el.rows.map((row, i) => (
          <tr key={i}>
            <td dangerouslySetInnerHTML={{ __html: clean(row.left) }} />
            <td dangerouslySetInnerHTML={{ __html: clean(row.right) }} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}
