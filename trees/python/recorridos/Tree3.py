
class Tree3:
    def __init__(self, key, left, right1, right2):
        self.key = key
        self.left = left
        self.right1 = right1
        self.right2 = right2

    def preorder(self):
        output = []
        output.append(self.key)
        if (self.left != None): output.append(self.left.preorder())
        if (self.right1 != None): output.append(self.right1.preorder())
        if (self.right2 != None): output.append(self.right2.preorder())
        flat_list = [item for sublist in output for item in sublist]
        
        return flat_list

    def inorder(self):
        output = []
        if (self.left != None): output.append(self.left.inorder())
        output.append(self.key)
        if (self.right1 != None): output.append(self.right1.inorder())
        if (self.right2 != None): output.append(self.right2.inorder())
        flat_list = [item for sublist in output for item in sublist]
        
        return flat_list

    def posorder(self):
        output = []
        if (self.left != None): output.append(self.left.posorder())
        if (self.right1 != None): output.append(self.right1.posorder())
        if (self.right2 != None): output.append(self.right2.posorder())
        output.append(self.key)
        flat_list = [item for sublist in output for item in sublist]
        
        return flat_list

