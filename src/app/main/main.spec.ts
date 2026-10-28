import { TestBed } from '@angular/core/testing'
import { provideRouter } from '@angular/router'
import { Main } from './main'

describe('Main', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main],
      providers: [provideRouter([])],
    }).compileComponents()
  })

  it('should have a list of awesomeThings', () => {
    const fixture = TestBed.createComponent(Main)
    expect(fixture.componentInstance.awesomeThings.length).toBe(3)
  })

  it('should render a heading for each of awesomeThings', async () => {
    const fixture = TestBed.createComponent(Main)
    await fixture.whenStable()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelectorAll('.marketing h4').length).toBe(3)
  })
})
