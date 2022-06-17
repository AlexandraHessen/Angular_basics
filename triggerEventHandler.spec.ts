it('should open role management modal on click', () => {
  const spy = spyOn(component, 'openRoleManagementModal');

  component.isRoleManagementClaim = true;
  component.isShiftArchived = false;

  fixture.detectChanges();

  element = fixture.debugElement.query(By.css('.role-management'));
  element.triggerEventHandler('click', new MouseEvent(''));

  expect(spy).toHaveBeenCalled();
});