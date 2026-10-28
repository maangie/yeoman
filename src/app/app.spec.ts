import { TestBed } from '@angular/core/testing'
import { provideRouter } from '@angular/router'
import { App } from './app'

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App)
    expect(fixture.componentInstance).toBeTruthy()
  })

  it('should render the brand', async () => {
    const fixture = TestBed.createComponent(App)
    await fixture.whenStable()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.navbar-brand')?.textContent).toContain('yeoman')
  })

  it('should toggle the navbar menu', async () => {
    const fixture = TestBed.createComponent(App)
    await fixture.whenStable()
    const compiled = fixture.nativeElement as HTMLElement
    const collapse = compiled.querySelector('#js-navbar-collapse') as HTMLElement
    expect(collapse.classList).not.toContain('show')
    ;(compiled.querySelector('.navbar-toggler') as HTMLElement).click()
    await fixture.whenStable()
    expect(collapse.classList).toContain('show')
  })
})
