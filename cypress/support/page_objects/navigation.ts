class NavigationMenu {
   
    public hairCareTab() {
        return this.getTab('Hair Care')
    }

    private getTab(label: String) {
        return cy.getVisible("a[href*='product/category&path='", label)
    }

   
}

export const navigation = new NavigationMenu()