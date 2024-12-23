import calendar

print('Welcome to the super calendar\n')

year = int(input('Enter the year '))
month = int(input('Enter the month '))

print(calendar.month(year, month))

print('Bye!')