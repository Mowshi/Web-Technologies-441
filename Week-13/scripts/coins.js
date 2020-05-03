class Coin{

    constructor(xCoord,yCoord,objectRadius, color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectRadius = objectRadius;
        this.color = color;
    }
    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get radius()
    {
        return this.objectRadius;
    }

    get mainColor()
    {
        return this.color;
    }
    }
