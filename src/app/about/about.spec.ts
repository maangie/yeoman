import { TestBed } from '@angular/core/testing'
import { About } from './about'

describe('About', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents()
  })

  it('should render the about view', async () => {
    const fixture = TestBed.createComponent(About)
    await fixture.whenStable()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.textContent).toContain('This is the about view.')
  })
})
