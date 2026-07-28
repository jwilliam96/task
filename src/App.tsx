import './App.css'
import CardContainer from './components/CardContainer'
import Task from './components/Task'

function App() {

  const tasks = ['task', 'task', 'task', 'task']

  return (
    <div className='relative' >

      <figure>
        <img
          src="/images/bg-mobile-light.jpg" alt="image fondo"
          className='w-full h-50 object-cover'
        />
      </figure>

      {/* CONTAINER TODO  */}
      <div className='py-8 px-6 absolute top-4 left-0 right-0'>

        <header className='flex justify-between items-center text-app-bg-secondary'>
          <h1 className='text-3xl font-bold tracking-widest'>TODO</h1>
          <img src="/images/icon-moon.svg" alt="icono" />
        </header>

        <div className='mt-8 grid gap-5'>

          {/* INPUT CREATE TASK */}
          <CardContainer className='gap-4 px-4'>
            <div className='border border-app-border-circle size-6 rounded-full shrink-0'></div>
            <input
              type="text"
              className='w-full placeholder:text-sm'
              placeholder='Create a new todo...'
            />
          </CardContainer>

          {/* LIST TASK */}
          <CardContainer className='grid divide-y divide-app-border-circle px-0'>
            {
              tasks.map((item, i) => (
                <Task key={`${item}+${i}`} className='px-4'></Task>
              ))
            }

          </CardContainer>


          <CardContainer>
            <ul className='flex justify-center gap-5 w-full text-app-text-secondary font-bold'>
              <li>All</li>
              <li>Active</li>
              <li>Completed</li>
            </ul>
          </CardContainer>

          <p className='text-center text-app-text-secondary font-medium mt-6'>Drag and drop to reorder list</p>

        </div>

      </div>

    </div>
  )
}

export default App
