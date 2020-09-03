from dataStructures.Stack import Stack


def is_match(p1, p2):
    if p1 == "(" and p2 == ")":
        return True
    elif p1 == "[" and p2 == "]":
        return True
    elif p1 == "{" and p2 == "}":
        return True
    else:
        return False


def balanced_parenthesis(paren_str):
    index = 0
    s = Stack()
    is_balanced = True

    while is_balanced and index < len(paren_str):
        paren = paren_str[index]
        if paren in "([{":
            s.push(paren)
        else:
            if s.isEmpty():
                is_balanced = False
            else:
                top = s.pop()
                if not is_match(top, paren):
                    is_balanced = False
        index += 1

    if is_balanced and s.isEmpty:
        return True
    else:
        return False


theInput = input(">> ")
print(balanced_parenthesis(theInput))
