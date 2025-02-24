import useStore from '@/lib/store'
import { Input } from '@/components/ui/input'

export default function gridLines() {
  const { ROWS, COLS, LINE_COLOR, LINE_WIDTh, setVal } = useStore()
  return (
    <>
      <Input placeholder='rows' type='number' onChange={(e) => setVal('ROWS', e.target.value)} />
      <Input placeholder='cols' type='number' onChange={(e) => setVal('COLS', e.target.value)} />
      <Input placeholder='line-color' type='number' onChange={(e) => setVal('LINE_COLOR', e.target.value)} />
      <Input placeholder='line-width' type='number' onChange={(e) => setVal('LINE_WIDTH', e.target.value)} />
    </>
  )
}
